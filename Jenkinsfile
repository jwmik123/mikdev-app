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

        stage('Install Node') {
          agent {
            docker {
              image 'node:latest'
            }

          }
          steps {
            sh 'npm install && npm run build'
          }
        }

      }
    }

  }
}