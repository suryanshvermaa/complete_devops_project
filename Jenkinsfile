pipeline{
    agent any
    environment{
        SONAR_HOME= tool "Sonar"
    }
    stages{
        stage("clone code"){
            steps{
                echo "cloning code"
                git url: "https://github.com/suryanshvermaa/complete_devops_project.git",branch:"master"
            }
        }
         stage("SonarQube Quality Analysis"){
            steps{
                withSonarQubeEnv("Sonar"){
                    sh "${SONAR_HOME}/bin/sonar-scanner -Dsonar.projectName=DevSecOpsProject -Dsonar.projectKey=DevSecOpsProject"
                }
            }
        }
         stage("SonarQube Quality Gate Scan"){
            steps{
                timeout(time:2,unit:"MINUTES"){
                    waitForQualityGate abortPipeline: false
                }
            }
        }
         stage("Trivy File System Scan"){
           steps{
               sh "trivy fs --format table -o trivy-fs-report.html ."
           }
        }
         stage("Owasp Dependency Check"){
            steps{
                dependencyCheck additionalArguments: '--scan ./BackendServer', odcInstallation:'Owasp'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        
    }
}