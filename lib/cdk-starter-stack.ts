import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 import existing Lambda by ARN
    const importedLambdaFromArn = lambda.Function.fromFunctionArn(
      this,
      'external-lambda-from-arn',
      `arn:aws:lambda:${cdk.Stack.of(this).region}:${
        cdk.Stack.of(this).account
      }:function:YOUR_FUNCTION_NAME`,
    );

    console.log('functionArn 👉', importedLambdaFromArn.functionArn);
    console.log('functionName 👉', importedLambdaFromArn.functionName);

    // 👇 create API
    const api = new apigateway.RestApi(this, 'api');

    // 👇 add a /test route on the API
    const test = api.root.addResource('test');

    // 👇 integrate imported Lambda at GET /test on the API
    test.addMethod(
      'GET',
      new apigateway.LambdaIntegration(importedLambdaFromArn),
    );
  }
}
