node {
    stage('SCM Checkout'){
        git(branch: 'main', credentialsId : 'my-github', url : 'https://github.com/Koozzi/node-jenkins')
    }
    
    stage('Docker build image'){
        sh 'docker build -t myserver .'
    }
    
    stage('Docker run test container'){
        withCredentials([
            string(credentialsId: 'MONGODB_CONNECTION_KEY', variable: 'MONGODB_CONNECTION_KEY'),
            string(credentialsId: 'JWT_SECRET', variable: 'JWT_SECRET')
        ]) {
            sh'''
            docker rm -f `docker ps -aq`
            echo MONGODB_CONNECTION_KEY=${MONGODB_CONNECTION_KEY} > .env
            JWT_SECRET=${JWT_SECRET} >> .env
            docker run -d -p 5000:5000 --env-file .env myserver
            '''
        }
    }

    stage('Unit api test'){
        sh'''
        cd test
        docker build -t test .
        docker run test
        '''
    }

    stage('Docker run container'){
        withCredentials([
            string(credentialsId: 'MONGODB_CONNECTION_KEY', variable: 'MONGODB_CONNECTION_KEY'),
            string(credentialsId: 'JWT_SECRET', variable: 'JWT_SECRET')
        ]) {
            sh'''
            docker rm -f `docker ps -aq`
            echo MONGODB_CONNECTION_KEY=${MONGODB_CONNECTION_KEY} > .env
            JWT_SECRET=${JWT_SECRET} >> .env
            docker run -d -p 5000:5000 --env-file .env myserver
            '''
        }
    }
}