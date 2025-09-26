<style scoped>
    @import './vocabularyBox.css';
</style>

<template>
    <div class="homeContainer">
        <div class="vocabularybox">
                <p class="listid">List <span class="listData">23</span></p>
                <p class="define">Define: <span class="defineData">To say what the meaning of something, especially a
                        word, is,</span> </p>
                <p class="vietnames">Vietnames: <span class="vietnamesData">Định nghĩa</span> -------- <span
                        class="prouData">/dɪˈfaɪn/</span></p>
                <p class="error">Incorrect</p>
                <input type="text" class="input vocabularyinput">
                <!-- <input type="text" class="input vocabularyinput errorinput"> -->
                <p class="anwser">Anwser: <span class="anwserData">Define</span> (<span class="typeData">verb</span>)
                </p>
                <div class="buttongroup">
                    <div class="button checkbutton">Check</div>

                    <div class="button forgottenbutton">Forgotten</div>
                </div>
                <div class="groupnumber">
                    <p class="button pagebutton backwardBtn">backward</p>
                    <p class="numberpage"><span class="stt">1</span>/<span class="pageTotal">54</span></p>
                    <p class="button pagebutton forwardBtn"> forward</p>
                </div>
            </div>
    </div>
</template>