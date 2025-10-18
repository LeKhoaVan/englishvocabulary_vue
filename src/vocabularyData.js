// read vocabulary file
const readAllVocabulary =
    fetch("/vocabularylist.json")
        .then(respond => respond.json())
        .then(data => data)
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

// check value item in session file
const checkValueItemSession = (vocabularyList, stt) => {
    for (let item of vocabularyList) {
        if (item === stt) {
            return true;
        }
    }
}

// write vocabularies to session file
const writeVocabularyInSession = (listId, stt) => {
    try {
        let vocabularyList = JSON.parse(sessionStorage.getItem(listId)) || [];

        if (!checkValueItemSession(vocabularyList, stt)) {
            vocabularyList.push(stt);
            sessionStorage.setItem(listId, JSON.stringify(vocabularyList));
        }

    } catch (error) {
        console.log("Error when write vocabulary to session file: ", error)
    };
}

//read all vocabularies from session file 
const readAllVocabularyFromSession = () => {
    try {
        let allVocabularyFromSession = {};
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const value = sessionStorage.getItem(key);

            allVocabularyFromSession[key] = value
        }
        return allVocabularyFromSession;
    } catch (error) {
        console.log("error when read all vocabulary from session file: ", error);
    }
}

// read vocabularies by listId from session file
const readVocabularyFromSession = (listId) => {
    try {
        return sessionStorage.getItem(listId);
    } catch (error) {
        console.log("error when read vocabulary from session file: ", error);
    }
}

// read vocabulary list by list 
const getVocabularyListByList = async (id, list) => {
    try {
        let vocabularyListByList = {};
        let temporaryVocabulary = [];
        const vocabularyList = await getVocabularyList(id);

        list.forEach(item => {
            temporaryVocabulary.push(vocabularyList.vocabularies[item])
        });


        vocabularyListByList.id = id;
        vocabularyListByList.vocabularies = temporaryVocabulary;
        console.log(vocabularyListByList);

        return vocabularyListByList;

    } catch (error) {
        console.log("error when vocabulary list by list: ", error);
    }
}


export {
    getAllVocabulary,
    getVocabularyList,
    getVocabularyBySTT,
    readAllVocabularyFromSession,
    writeVocabularyInSession,
    readVocabularyFromSession,
    getVocabularyListByList,

}