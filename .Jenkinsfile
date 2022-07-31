pipeline {
 agent any
    stages {
        
      stage('Docker Build & Run - Node image') { 
             steps {
                echo 'build node image & run npm install'
                   script
                       {
                        def dockerHome = tool 'DOCKER'
                        env.PATH = "${dockerHome}/bin:/var/jenkins_home/workspace/webdriverIO-pipline@tmp/"
                        docker.build("node-image", "-f ./var/jenkins_home/workspace/webdriverIO-pipline/Dockerfile.app-test .")
                        bat 'docker run --name node-test -p 8080:8080 -it node-image'
                        }
            }
          }
      
        stage('Docker Build & Run - allure + Selenium hub') {
                steps {
                  echo 'upload allure + Selenium hub containers'
                  bat '''
                  cd /var/jenkins_home/workspace/webdriverIO-pipline
                  docker build -t selenium-hub -f Dockerfile.selenium-hub .
                  '''
                  bat 'docker compose up -d' 
            }
    }
    
        stage('npm test') {
            agent any
            steps {
                echo 'run tests'
                bat  'npm run wdio'
               
            }
        }
    }
}