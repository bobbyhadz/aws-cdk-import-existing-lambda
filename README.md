# Import an Existing Lambda Function in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-import-existing-lambda)

> If you use CDK v1, switch to the cdk-v1 branch

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Replace the `YOUR_FUNCTION_NAME` placeholder, in the call to
   `fromFunctionArn` method, with the name of the lambda function you want to
   import

4. Create the CDK stack

```bash
npx aws-cdk deploy
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup

```bash
npx aws-cdk destroy
```
