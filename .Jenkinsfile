pipeline {
  
 agent any

    stages {
        stage('Docker Build & Run - Node image') { 
             steps {
                echo 'build node image & run npm install'
                   script
                       {
                        docker.build("node-image", "-f ./var/jenkins_home/workspace/pipline/Dockerfile.app-test .")
                        sh 'docker run --name node-test -p 8080:8080 -it node-image'
                        }
            }
          }
        
        stage('Docker Build & Run - allure + Selenium hub') {
                steps {
                  echo 'upload allure + Selenium hub containers'
                  sh '''
                  cd /var/jenkins_home/workspace/pipline/Dockerfile
                  docker build -t selenium-hub -f Dockerfile.selenium-hub .
                  '''
                  sh 'docker compose up -d' 
            }
    }
        stage('npm test') {
            agent any
            steps {
                echo 'run tests'
                sh  'npm run wdio'
               
            }
        }
    }
}