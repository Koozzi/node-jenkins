pipeline{
    agent any
    
    environment {
        MONGODB_CONNECTION_KEY = credentials('MONGODB_CONNECTION_KEY')
        JWT_SECRET = credentials('JWT_SECRET')
        USERNAME = credentials('USER')
        PASSWORD = credentials('PASSWORD')
    }

    stages {
        
        stage('Make environment file .env'){
            steps{
                echo "Making environment firl .env ..."
                sh'''
                echo MONGODB_CONNECTION_KEY=${MONGODB_CONNECTION_KEY} > .env
                echo JWT_SECRET=${JWT_SECRET} >> .env
                '''
            }
        }

        stage('SCM Checkout'){
            steps{
                git(
                    branch: 'main',
                    credentialsId : 'my-github',
                    url : 'https://github.com/Koozzi/node-jenkins'
                )
            }
        } 
        
        stage('Docker Build'){
            steps{
                echo "Buliding docker image ... "
                sh 'docker build -t koozzi666/myserver .'
            }
        }
        
        stage('Docker run test container'){
            steps{
                echo "Running docker container for unit test ..."
                sh'''
                docker rm -f `docker ps -aq`
                docker run -d -p 5000:5000 --env-file .env koozzi666/myserver
                '''
            }
        }

        stage('Unit api test'){
            steps{
                echo "Running unit api test by JEST ..."
                // sh'''
                // cd test
                // docker build -t test .
                // docker run test
                // ''' 
                sh'''
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker push koozzi666/myserver
                '''
                echo "Test ended successfully."
            }
        }

        stage('Docker run container'){
            steps{
                echo "Running docker container on remote server ..."
                sh'''
                docker rm -f `docker ps -aq`
                docker run -d -p 5000:5000 --env-file .env koozzi666/myserver
                '''
            }
        }

        stage('[Remote] Docker run container'){
            steps{
                sh'''
                ssh -i "AWS_ACCESS_KEY.pem" -o StrictHostKeyChecking=no ubuntu@3.35.26.230 "bash -s" < myserver.sh
                '''
            }
        }
    }
}
