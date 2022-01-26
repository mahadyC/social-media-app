pipeline {
    agent any
    
    tools {nodejs "Node"}
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start') {
            steps {
                sh 'npm start'
            }
        }
         
    }
}