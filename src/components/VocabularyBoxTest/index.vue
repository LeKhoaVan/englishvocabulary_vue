<script setup>
    import { onMounted, ref, watch } from 'vue';
    import Alert from "@/components/Alert";
    import { useRoute, useRouter } from 'vue-router';
    import Button from "../Button/index.vue";
    import { writeVocabularyInSession } from '@/vocabularyData';


    const router = useRouter();

    const props = defineProps({
        vocabularyList: {
            type: Object,
            required: true,
        }
    });
    const isAlert = ref(true);
    const vocabulary = ref({});
    const route = useRoute();
    const vocabularySTT = ref(parseInt(route.params.stt));
    const isCheck = ref(false);
    const isCheckIncorrect = ref(false);
    const vocabularyInputValue = ref("");
    let vocabularyTotal = 0;

    watch(
        [() => props.vocabularyList, ()=> route.params.stt,],
        ([newVal, newStt]) => {
            if (newVal.vocabularies) {      
                vocabulary.value = newVal.vocabularies[newStt]
                vocabularyTotal = newVal.vocabularies.length;
            }
        },
        { immediate: true }
    );

      const emptyField = () => {
        isCheckIncorrect.value = false;
        vocabularyInputValue.value = "";
        isCheck.value = false; 
    }

    const handleForwardClick = () => {
        
       if(vocabularySTT.value < vocabularyTotal-1){
            emptyField();
            vocabularySTT.value = vocabularySTT.value +1;
            router.push(`/learn/${props.vocabularyList?.id}/${vocabularySTT.value}`)
       } else {
            alert("Hoàn tất");
       }
    };

    const handleBackForwardClick = () => {
        if(vocabularySTT.value >= 1) {
            emptyField();
             vocabularySTT.value = vocabularySTT.value -1;
             router.push(`/learn/${props.vocabularyList?.id}/${vocabularySTT.value}`)
        }
    }


    const handleEnter = () => {
        if(vocabularyInputValue.value.toLowerCase().trim() === vocabulary.value.vocabulary.toLowerCase()) {
            isCheckIncorrect.value = false;

            if(vocabularySTT.value < vocabularyTotal -1){
                emptyField();
                vocabularySTT.value = vocabularySTT.value +1;
                router.push(`/learn/${props.vocabularyList?.id}/${vocabularySTT.value}`)
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
    const handleBookMarkClick = (listId, stt) =>{
        if(listId !== undefined && stt !== undefined) {
             writeVocabularyInSession(listId, stt)
            console.log(listId, props.vocabularyList.vocabularies);
        }
    }


    const handleCloseClick = () => {
        isAlert.value = false
    }
</script>

<style scoped>
    @import './vocabularyBox.css';
</style>

<template>
    <div class="homeContainer">
        <Alert title="Thông Báo Quan Trọng"
            message="Enter để kiểm tra và sang từ tiếp theo!!!"
            type="info"
            @click="handleCloseClick"
            v-if="isAlert"
        />

                <div class="vocabularybox">
                <div class="titleContent">
                    <p class="listid">List <span class="listData">{{ props.vocabularyList?.id }}</span></p>
                    <img class="iconBookMark" src="../../assets/bookmark-regular-full.svg" @click="handleBookMarkClick(props.vocabularyList?.id,vocabularySTT)" />
                </div>
                <p class="define">Define: <span class="defineData">{{vocabulary.define}}</span> </p>
                <p class="vietnames">Vietnames: 
                    <span class="vietnamesData">{{ vocabulary.vietnames }}</span> 
                    <!-- <span class="prouData">{{vocabulary.IPA}}</span> -->
                </p>
                <!-- <Button btnType="Clues" btnName="Clues"> </Button> -->
                <p class="error" v-if="isCheckIncorrect">INCORRECT</p>
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

                    <p class="numberpage"><span class="stt">{{ vocabularySTT +1 }}</span>/<span class="pageTotal">{{vocabularyTotal}}</span></p>

                    <Button btnType="forward" btnName="Forward" @click="handleForwardClick"> </Button>
                </div>
        </div>
    </div>
</template>