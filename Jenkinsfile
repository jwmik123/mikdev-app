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
    // quality gate should pass before building and running docker image test
    stage('Wait for Quality Gate status') {
      steps {
        waitForQualityGate abortPipeline: true
      }
    }

  }
  environment {
    PATH = "/opt/sonar-scanner/bin:${env.PATH}"
  }
}
