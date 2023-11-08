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

  }
  environment {
    QUALITY_GATE_PASS = 'false'
    PATH = "/opt/sonar-scanner/bin:${env.PATH}"
  }
  post {
    always {
      script {
        def qg = waitForQualityGate() // This requires the SonarQube webhook to be correctly configured
        if (qg.status == 'OK') {
          env.QUALITY_GATE_PASS = 'true'
        } else {
          error "Quality Gate did not pass: ${qg.status}"
        }
      }

    }

  }
}