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
        dockerNode(image: 'node:latest')
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