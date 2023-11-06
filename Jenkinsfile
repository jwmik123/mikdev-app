pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jwmik123/mikdev-app/', branch: 'main')
      }
    }

    stage('Install Node and npm') {
      agent {
        node {
          label 'node agent'
        }

      }
      steps {
        sh '''sudo apt-get update && sudo apt-get install -y nodejs npm
node --version
npm --version'''
      }
    }

    stage('Front-End Build') {
      agent {
        node {
          label 'node agent'
        }

      }
      steps {
        sh 'npm i && npm build'
      }
    }

  }
}