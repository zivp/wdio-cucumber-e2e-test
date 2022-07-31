pipeline {
  
    agent any
        
    stages {
        stage('Docker Build - Node image') {
            agent {dockerfile.app-test true}
            steps {
                echo 'build node image & run npm install'
                sh 'docker build -t node-image -f Dockerfile.app-test .'
               
            }
        }
        stage('Docker Build - allure + Selenium hub') {
             agent {dockerfile.selenium-hub true}
            steps {
                echo 'upload allure + Selenium hub containers'
                sh 'docker build -t selenium-hub -f Dockerfile.selenium-hub .'
            }
        }
        stage('up Allure + Selenium hub containers') {
            agent any
            steps {
                echo 'up allure + Selenium hub containers'
                sh  'docker compose up -d' 
                
            }
        }
          stage('start node-image') {
            agent any
            steps {
                echo 'up allure + Selenium hub containers'
                sh 'docker run --name node-test -p 8080:8080 -it node-image'
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