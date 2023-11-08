pipeline {
  agent any
  triggers {
    GitHubPushTrigger()
  }
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/jwmik123/mikdev-app/', branch: 'main')
      }
    }

    stage('Logging checkout files') {
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

            script {
              def qg = waitForQualityGate()
              if (qg.status != 'OK') {
                error "Pipeline gestopt omdat de Quality Gate gefaald is: ${qg.status}"
              }
            }
          }
        }
      }
    }

    stage('Deploy to Docker') {
      steps {
        sh 'docker stop $(docker ps -q)'
        sh 'docker build -t mikdev-app:latest .'
        sh 'docker run -d -p 3000:3000 mikdev-app:latest'
      }
    }

    stage('Email Build Status') {
      steps {
        emailext(subject: 'Jenkins build', attachLog: true, body: '${currentBuild.currentResult}: Job ${env.JOB_NAME}\\nMore Info can be found here: ${env.BUILD_URL}', attachmentsPattern: '*.csv', to: 'joel.mik@hva.nl')
      }
    }

  }
  environment {
    PATH = "/opt/sonar-scanner/bin:${env.PATH}"
  }
}