pipeline {
  
    agent { dockerfile true }

    stages {
        stage('npm install') {
            steps {
                echo 'build node image & run npm install'
                sh """
                 docker build -t node-image -f Dockerfile.app-test . 
                """
            }
        }
        stage('create image Allure + Selenium hub containers') {
            steps {
                echo 'upload allure + Selenium hub containers'
                sh """ 
                docker build -t selenium-hub -f Dockerfile.selenium-hub .
                """
            }
        }
        stage('up Allure + Selenium hub containers') {
            steps {
                echo 'up allure + Selenium hub containers'
                sh """ 
                docker compose up -d 
                """
            }
        }
          stage('start node-image') {
            steps {
                echo 'up allure + Selenium hub containers'
                sh """ 
                docker run --name node-test -p 8080:8080 -it node-image
                """
            }
        }
             stage('npm test') {
            steps {
                echo 'run tests'
                sh """ 
                npm run wdio
                """
            }
        }
    }
}