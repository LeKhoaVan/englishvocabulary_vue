// read vocabulary file
const readAllVocabulary =
    fetch("vocabularylist.json")
        .then(respond => respond.json()
        )
        .then(data => data
        )
        .catch(error => {
            console.log("Error when read vocabulary data: ", error);
        });

// read vocabulary list
const readVocabularyList = async (id) => {
    const vocabularyList = await readAllVocabulary;

    if (vocabularyList.find(item => item.id === id) !== undefined) {
        return vocabularyList.find(item => item.id === id);
    } else {
        return "vocabulary list is not exist!";
    }

}



// get all vocabulary
const getAllVocabulary = async () => {
    const allVocabulary = await readAllVocabulary;
    return allVocabulary;
}

// get vocabulary list by id list
const getVocabularyList = async (id = "23") => {
    const vocabularyList = await readVocabularyList(id);

    if (vocabularyList !== undefined) {
        return vocabularyList;
    } else {
        return "Vocabulary list is not exist!";
    }
}

// get vocabulary in list by stt
const getVocabularyBySTT = async (listId, stt = 0) => {
    const vocabularyList = await readVocabularyList(listId);

    const vocabulary = vocabularyList.vocabularies[stt];
    if (vocabulary !== undefined) {
        return vocabulary;
    } else {
        return "vocabulary is not exist!";
    }
}


export {
    getAllVocabulary,
    getVocabularyList,
    getVocabularyBySTT,

}