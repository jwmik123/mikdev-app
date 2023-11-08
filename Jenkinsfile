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

        stage('SonarQube scanner') {
          steps {
            withSonarQubeEnv('sonarscanner') {
              sh '''sonar-scanner \\
  -Dsonar.projectKey=mikdev-app \\
  -Dsonar.organization=jwmik123 \\
  -Dsonar.host.url=https://sonarcloud.io \\
  -Dsonar.login=04315f70b1b94a989ed7c6112a12e0989aede8a8
'''
            }

          }
        }

      }
    }

    stage('Report email') {
      steps {
        mail(subject: 'Build status', body: 'Log of the most recent build', to: 'joel.mik@hva.nl', attachLog: true)
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t mikdev-app:latest .'
        sh 'docker run -p 3000:3000 mikdev-app:latest'
      }
    }

  }
  environment {
    PATH = "/opt/sonar-scanner/bin:${env.PATH}"
  }
}
