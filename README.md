# cdk-CloudFront-distribution-s3-origin
Create a CloudFront distribution with the S3 bucket as the origin

Here’s a simple explanation of the CloudFront distribution with an S3 bucket as the origin architecture:

![image](https://github.com/user-attachments/assets/452e8336-a4ca-45dd-a110-cea3dc0ecf13)

🎯 Objective

To configure and deploy an Amazon CloudFront distribution with an Amazon S3 bucket as the origin using the CDK

📝 Prerequisites

AWS Account with admin permissions
S3 bucket with static files or website content
AWS CLI configured (optional for IaC)
Node.js and AWS CDK installed (if using CDK)

🔧 Step-by-Step Procedure

✅ 1. Create or Use an Existing S3 Bucket
aws s3 mb s3://my-static-site-bucket
Upload content:
aws s3 sync ./website s3://my-static-site-bucket
(Optional) Enable static website hosting:
aws s3 website s3://my-static-site-bucket/ --index-document index.html

✅ 2. Set Permissions (Public or via OAC/OAI)
Using Origin Access Control (Recommended):
Go to S3 → Permissions → Block Public Access → Turn off
Create an OAC/OAI in CloudFront and attach it
Update the S3 bucket policy to allow CloudFront access

✅ 3. Create CloudFront Distribution
🖥️ Option A: Using AWS Console
Go to CloudFront → Create Distribution
Set Origin domain to your S3 bucket
Viewer protocol policy: Redirect HTTP to HTTPS
Optional: Enable caching, logging, WAF, etc.

Click Create Distribution

💻 Using AWS CDK (TypeScript)

import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';

const bucket = new s3.Bucket(this, 'SiteBucket', {
  removalPolicy: RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
});

const distribution = new cloudfront.Distribution(this, 'MyDistribution', {
  defaultBehavior: {
    origin: new origins.S3Origin(bucket),
    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
  },
});

Enter the TypeScript/ directory, install the dependencies, deploy the CDK stack.

cd TypeScript
npm install
cdk synth
cdk bootstrap aws://<YOUR_AWSCN_ACCOUNT_ID>/cn-north-1
cdk deploy

📡 Verification

Visit the CloudFront domain name
Ensure it loads your S3 content
Try accessing via HTTP → It should redirect to HTTPS

🧹 Cleanup (Optional)

To delete the deployed resources, run the cdk destroy command from the stack directory.
