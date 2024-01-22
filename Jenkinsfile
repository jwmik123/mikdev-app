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

<<<<<<< HEAD
            script {
              def qg = waitForQualityGate()
              if (qg.status != 'OK') {
                error "Pipeline aborted because quality gate didn't pass: ${qg.status}"
              }
            }
=======
>>>>>>> c8a3a608eb0cd863036b0c88a28491c78bb7fc90
          }
        }

      }
    }

    stage('Deploy to Docker') {
      steps {
        script {
<<<<<<< HEAD
          // Check if there are any running containers
=======
>>>>>>> c8a3a608eb0cd863036b0c88a28491c78bb7fc90
          def activeContainers = sh(script: "docker ps -q", returnStdout: true).trim()
          // Stop them if there are any
          if (activeContainers) {
            sh "docker stop ${activeContainers}"
          }
        }
<<<<<<< HEAD
=======

>>>>>>> c8a3a608eb0cd863036b0c88a28491c78bb7fc90
        sh 'docker build -t mikdev-app:latest .'
        sh 'docker run -d -p 3000:3000 mikdev-app:latest'
      }
    }

    stage('Email Build Status') {
      steps {
<<<<<<< HEAD
        emailext(
          subject: 'Jenkins Build', 
          attachLog: true, 
          body: '${currentBuild.currentResult}: Job ${env.JOB_NAME}\\n More Info can be found here: ${env.BUILD_URL}',
          attachmentsPattern: '*.csv', 
          to: 'joel.mik@hva.nl')
=======
        emailext(subject: 'Build status for Job ${ENV,var="JOB_NAME"}', body: '''Build Status: ${BUILD_STATUS}
                 Job Name: ${JOB_NAME}
                 Build Number: ${BUILD_NUMBER}
                 More info at: ${BUILD_URL}''', recipientProviders: [[$class: 'DevelopersRecipientProvider']], to: 'joel.mik@hva.nl', attachLog: true, attachmentsPattern: '*.csv')
>>>>>>> c8a3a608eb0cd863036b0c88a28491c78bb7fc90
      }
    }
  }
  environment {
    PATH = "/opt/sonar-scanner/bin:${env.PATH}"
  }
  triggers {
    githubPush()
  }
}