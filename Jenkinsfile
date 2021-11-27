pipeline {
    agent { dockerfile {
        filename 'Dockerfile'
        args '-p 3000:3000'
    } }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'node -c index.js'
            }
        }
        stage('Deploy Local') {
            steps {
                sh 'npm install'
                sh 'npm run client:build'
                sh 'npm run server:stag'
            }
        }
        stage('Destroy Instance') {
            steps {
                input "OK?"   
            }
        }   
    }
}