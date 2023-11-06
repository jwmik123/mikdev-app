pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jwmik123/mikdev-app/', branch: 'main')
      }
    }

    stage('Front-End Build') {
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