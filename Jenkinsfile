pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jwmik123/mikdev-app/', branch: 'main')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          agent any
          steps {
            sh 'ls -la'
          }
        }

        stage('Build Project') {
          steps {
            sh 'npm i && npm run build'
          }
        }

      }
    }

  }
}