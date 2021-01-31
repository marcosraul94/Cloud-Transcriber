import firebaseApp from '../../firebase'

export const generateRelativeCloudPath = (fileName, user) => `${user}/${new Date().getTime()}/${fileName}`

export const generateCloudURI = (fileName, user) => {
    const bucket = firebaseApp.storage().ref().bucket
    const relativePath = generateRelativeCloudPath(fileName, user)
    return `gs://${bucket}/${relativePath}`
}

export const parseRelativeCloudPath = uri => {
    const [appPath, basePath, bucketPath, ...relativeCloudPath] = uri.split('/')
    return relativeCloudPath.join('/')
}