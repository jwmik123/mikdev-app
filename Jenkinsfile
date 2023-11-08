pipeline {
  agent any
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

            // script {
            //   def qg = waitForQualityGate()
            //   if (qg.status != 'OK') {
            //     error "Pipeline gestopt omdat de Quality Gate gefaald is: ${qg.status}"
            //   }
            // }

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
        emailext(subject: 'Build status for Job ${ENV,var="JOB_NAME"}', body: '''Build Status: ${BUILD_STATUS}
                 Job Name: ${JOB_NAME}
                 Build Number: ${BUILD_NUMBER}
                 More info at: ${BUILD_URL}''', recipientProviders: [[$class: 'DevelopersRecipientProvider']], to: 'joel.mik@hva.nl')
      }
    }

  }
  environment {
    PATH = "/opt/sonar-scanner/bin:${env.PATH}"
  }
  triggers {
    githubPush()
    pollSCM('H/5 * * * *')
  }
}
