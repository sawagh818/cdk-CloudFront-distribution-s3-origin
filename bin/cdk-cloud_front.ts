// bin/cdk-cloud_front.ts
import * as cdk from 'aws-cdk-lib';
import { MyCloudfrontAppStack } from '../lib/cdk-cloud_front-stack';

const app = new cdk.App();
new MyCloudfrontAppStack(app, 'CdkCloudFrontStack');
