<script setup>
    import { ref, onMounted, watch } from "vue";
    import Button from "../Button/index.vue";
    import { getVocabularyList, getVocabularyBySTT } from "@/vocabularyData";
    import { useRoute, useRouter } from "vue-router";


    const route = useRoute();
    const router = useRouter();
    const listId = route.params.listId;
    const vocabularySTT = ref(parseInt(route.params.stt));


    // Biến reactive
    const isClues = ref(false);
    const isCheck = ref(false);
    const isCheckIncorrect = ref(false);
    const vocabulary = ref({});
    const vocabularyTotal = ref(0);
    const vocabularyInputValue = ref("");
    let vocabularyList;

    const emptyField = () => {
        isCheckIncorrect.value = false;
        vocabularyInputValue.value = "";
        isCheck.value = false; 
    }

    const handleForwardClick = () => {
        
       if(vocabularySTT.value < vocabularyTotal.value-1){
            emptyField();
            vocabularySTT.value = vocabularySTT.value +1;
            router.push(`/learn/${listId}/${vocabularySTT.value}`)
       } else {
            alert("Hoàn tất");
       }
    };

    const handleBackForwardClick = () => {
        if(vocabularySTT.value >= 1) {
            emptyField();
             vocabularySTT.value = vocabularySTT.value -1;
             router.push(`/learn/${listId}/${vocabularySTT.value}`)
        }
    }

    // alert("Enter để sang từ sau")

    const handleEnter = () => {
        if(vocabularyInputValue.value.toLowerCase() === vocabulary.value.vocabulary.toLowerCase()) {
            isCheckIncorrect.value = false;

            if(vocabularySTT.value < vocabularyTotal.value-1){
                emptyField();
                vocabularySTT.value = vocabularySTT.value +1;
                router.push(`/learn/${listId}/${vocabularySTT.value}`)
            } else {
                alert("Hoàn tất");
            }

        } else {

            isCheckIncorrect.value= true;
        }
    }

    const handleCheckClick = () => {
        isCheck.value = true;
    }

    onMounted(async () => {
        vocabulary.value = await getVocabularyBySTT(listId, vocabularySTT.value);
        vocabularyList = await getVocabularyList(listId)
        vocabularyTotal.value = vocabularyList.vocabularies.length;

    });

    watch(
        ()=> route.params.stt,
        async(newStt) => {
            vocabularySTT.value = parseInt(newStt);
            vocabulary.value = await getVocabularyBySTT(listId, vocabularySTT.value);
        },
        {immediate: true}
    )

</script>

<style scoped>
    @import './vocabularyBox.css';
</style>

<!-- <script>

    export default {
        data(){
            return {
                // allVocabulary: [],
                // vocabularyList: [],
                vocabularyInputValue: "",
               
            };
        },

        // async mounted() {
        //     this.vocabulary = await getVocabularyBySTT(listId, vocabularySTT);
        
        // },
    }
</script> -->

<template>
    <div class="homeContainer">
        <div class="vocabularybox">
                <p class="listid">List <span class="listData">{{ listId }}</span></p>
                <p class="define">Define: <span class="defineData">{{vocabulary.define}}</span> </p>
                <p class="vietnames">Vietnames: 
                    <span class="vietnamesData">{{ vocabulary.vietnames }}</span> 
                    <!-- <span class="prouData">{{vocabulary.IPA}}</span> -->
                </p>
                <!-- <Button btnType="Clues" btnName="Clues"> </Button> -->
                <p class="error" v-if="isCheckIncorrect">Incorrect</p>
                <p class="error" v-if="!isCheckIncorrect"><br/></p>

                <input type="text"  class="input vocabularyinput" spellcheck="false"
                    @keyup.enter="handleEnter" 
                    v-model="vocabularyInputValue"

                >
                <!-- <input type="text" class="input vocabularyinput errorinput"> -->
                <p class="anwser" v-if="isCheck">Anwser: 
                    <span class="anwserData">{{vocabulary.vocabulary}} --- {{vocabulary.IPA}}  --- </span> 
                    (<span class="typeData">{{ vocabulary.type }}</span>)
                </p>

                <p class="anwser" v-if="!isCheck"></p>

                <div class="buttongroup">
                    <Button btnType="showAnswer" btnName="Show Answer" @click="handleCheckClick"></Button>

                    <!-- <Button btnType="forget" btnName="Forgotten"></Button> -->
                </div>
                <div class="groupnumber">
                    <Button btnType="backward" btnName="Backward" @click="handleBackForwardClick"></Button>

                    <p class="numberpage"><span class="stt">{{ vocabularySTT + 1 }}</span>/<span class="pageTotal">{{vocabularyTotal}}</span></p>

                    <Button btnType="forward" btnName="Forward" @click="handleForwardClick"> </Button>
                </div>
            </div>
    </div>
</template>