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
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Build') {
          steps {
            sh 'npm install && npm build'
          }
        }

      }
    }

    stage('Install Node and npm') {
      steps {
        sh '''sudo apt-get update && sudo apt-get install -y nodejs npm
node --version
npm --version'''
      }
    }

  }
}