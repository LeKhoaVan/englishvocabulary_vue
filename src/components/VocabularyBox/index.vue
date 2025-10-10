<script setup>
    import {ref} from "vue";
    import Button from "../Button/index.vue";
    import {getAllVocabulary, getVocabularyList, getVocabularyBySTT} from "@/vocabularyData";
</script>

<style scoped>
    @import './vocabularyBox.css';
</style>

<script>
    const isClues = ref(false);
    const isCheck = ref(false);

    export default {
        data(){
            return {
                // allVocabulary: [],
                // vocabularyList: [],
                vocabulary: {},
               
            };
        },

        async mounted() {
            // this.allVocabulary = await getAllVocabulary(); 
            // this.vocabularyList = await getVocabularyList("23");
            this.vocabulary = await getVocabularyBySTT("23", 9);

        
        },
    }
</script>

<template>
    <div class="homeContainer">
        <div class="vocabularybox">
                <p class="listid">List <span class="listData">23</span></p>
                <p class="define">Define: <span class="defineData">{{vocabulary.define}}</span> </p>
                <p class="vietnames">Vietnames: <span class="vietnamesData">{{ vocabulary.vietnames }}</span> -------- 
                    <span class="prouData">{{vocabulary.IPA}}</span></p>
                <!-- <Button btnType="Clues" btnName="Clues"> </Button> -->
                <p class="error">Incorrect</p>
                <input type="text" class="input vocabularyinput">
                <!-- <input type="text" class="input vocabularyinput errorinput"> -->
                <p class="anwser">Anwser: <span class="anwserData">{{vocabulary.vocabulary}}</span> (<span class="typeData">{{ vocabulary.type }}</span>)
                </p>
                <div class="buttongroup">
                    <Button btnType="check" btnName="Check" handle></Button>

                    <Button btnType="forget" btnName="Forgotten"></Button>
                </div>
                <div class="groupnumber">
                    <Button btnType="backward" btnName="Backward"></Button>

                    <p class="numberpage"><span class="stt">1</span>/<span class="pageTotal">54</span></p>

                    <Button btnType="forward" btnName="Forward"> </Button>
                </div>
            </div>
    </div>
</template>