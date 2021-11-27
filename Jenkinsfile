pipeline {
    agent { dockerfile {
        filename 'Dockerfile'
        args '-p 3000:3000'
    } }
    stages {
        stage('Prepare') {
            steps {
                sh 'npm install'
                sh 'npm run build:client'
                sh 'npm run build:server'
            }
        }
        stage('Deploy Local') {
            steps {
                sh 'npm start'
            }
        }
        stage('Destroy Instance') {
            steps {
                input "OK?"   
            }
        }   
    }
}