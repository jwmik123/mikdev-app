pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jwmik123/mikdev-app/', branch: 'main')
      }
    }

    stage('Log') {
      agent any
      steps {
        sh 'ls -la'
      }
    }

    stage('Build Application') {
      agent {
        docker {
          image 'node:20.9.0-alpine3.18'
        }

      }
      steps {
        sh 'docker build -t mikdev-app .'
      }
    }

  }
}