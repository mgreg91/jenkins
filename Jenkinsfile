pipeline {
    agent any
    tools {nodejs "node"}
    triggers {
        cron('*/1 * * * *')
    }
    stages {
        stage("build repository"){
            steps{
                echo "building repository"
                bat "npm install"
                echo "build successfull"
            }
        }
        stage("run API tests job"){
            steps{
                echo "copying API test files to destination"
                bat("xcopy C:\\Users\\Gege\\Projects\\EPAM\\Dropbox c:\\ProgramData\\Jenkins\\.jenkins\\workspace\\hometask_pipeline /O /X /E /H /K /Y")
                echo "copying files successful"
                echo "running API tests"
                bat "npm run test:dropbox"
                echo "API tests finished"
            }
        }
        stage("run UI tests job"){
            steps{
                echo "running UI tests"
                bat "npm run test:login"
                echo "UI tests finished"
            }
        }
        stage("cleanup"){
            steps{
                echo "deleting repository data"
                bat("rmdir c:\\ProgramData\\Jenkins\\.jenkins\\workspace\\ /S /Q")
                echo "repository data deleted"
            }
        }
    }
}