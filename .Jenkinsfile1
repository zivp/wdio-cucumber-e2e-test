pipeline {
 agent any
    stages {
        
      stage('Docker Build & Run - Node image') { 
               agent {
                 docker { image 'node:16.13.1-alpine' }
               }
                   steps {
                   //     sh 'docker build -t node-image -f Dockerfile .'
                        //sh 'docker run node-image'
                         sh 'node --version'
                     }
            }
          
      
    /*    stage('Docker Build & Run - allure + Selenium hub') {
                steps {
                  echo 'upload allure + Selenium hub containers'
                  sh '''
                  cd /var/jenkins_home/workspace/webdriverIO-pipline
                  docker build -t selenium-hub -f Dockerfile.selenium-hub .
                  '''
                  sh 'docker compose up -d' 
            }
    }
    */
        stage('npm test') {
            agent any
            steps {
                echo 'run tests'
                sh  'npm run wdio'
               
            }
        }
    }
}