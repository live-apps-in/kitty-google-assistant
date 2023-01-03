pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t kitty-google-assisstant .'
            }
        }
        stage('Stop running Container') {
            steps {
                sh 'docker rm kitty-google-assisstant --force'
            }
        }
        stage('Start Container') {
            steps {
                sh 'docker run -p 5006:5000 -d --name kitty-google-assisstant kitty-google-assisstant'
            }
        }

    }
}