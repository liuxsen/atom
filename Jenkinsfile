pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''rm -rf node_modules && \\
npm install && \\
npm run build && 
ls dist'''
      }
    }
  }
}