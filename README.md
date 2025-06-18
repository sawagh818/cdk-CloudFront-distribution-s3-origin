# cdk-CloudFront-distribution-s3-origin
Create a CloudFront distribution with the S3 bucket as the origin

Here’s a simple explanation of the CloudFront distribution with an S3 bucket as the origin architecture:

![image](https://github.com/user-attachments/assets/452e8336-a4ca-45dd-a110-cea3dc0ecf13)



🧩 Components:
Amazon S3 Bucket

Stores static content: HTML, CSS, JS, images, videos, etc.

Must be public or accessed via Origin Access Control (OAC) or Origin Access Identity (OAI).

Amazon CloudFront Distribution

Acts as a content delivery network (CDN).

Caches content at edge locations for fast delivery.

Uses the S3 bucket as the origin to pull content.

Client (User Browser)

Makes a request to the CloudFront URL.

CloudFront serves cached content or fetches from S3 if not cached.

🔐 Optional Security Settings:
Restrict Bucket Access: Using OAC or OAI to prevent direct S3 access.

HTTPS: Enforce secure communication.

Signed URLs/Cookies: For restricted/private content access.
