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

    stage('Build') {
      steps {
        sh 'docker build -t mikdev:latest .'
      }
    }

    stage('Run the testserver') {
      steps {
        sh 'docker run -p 3000:3000 mikdev:latest'
      }
    }

  }
}