pipeline {
    agent any
    stages{
        stage("Clone Code"){
           steps{
                echo "Cloning the the code"
                git url: "https://github.com/hasanuzzaman-dev/node-crud-api.git", branch: "main"
           }
        }
        stage("Build"){
            steps{
                echo "Building the the image"
                sh "docker-compose up -d --force-recreate --no-deps --build web"
                
            }
        }
        stage("Push to Docker Hub"){
            steps{
                echo "Pushing the image docker Hub"
                withCredentials([usernamePassword(credentialsId: "docker-hub-dking", passwordVariable: "dockerHubPass",usernameVariable:"dockerHubUser")]){
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker tag node-crud-api:0.0.1 ${env.dockerHubUser}/node-crud-api:0.0.1"
                    sh "docker push ${env.dockerHubUser}/node-crud-api:0.0.1"
                }
                
            }
        }
        stage("Deploy"){
            steps{
                echo "Deploying the container"
            }
        }
    }
}