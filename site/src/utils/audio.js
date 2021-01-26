export const getAudioDuration = async audioFile => {
    return new Promise(resolve => {
        if (!audioFile) resolve(undefined)

        const audio =  document.createElement('audio')
        const reader = new FileReader()
    
        reader.onload = e => {
            audio.src = e.target.result
            const listener = audio.addEventListener('loadedmetadata', () => {
                audio.removeEventListener('loadedmetadata', listener)
                resolve(audio.duration)
            })
        }
    
        reader.readAsDataURL(audioFile)
    }) 
}

