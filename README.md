# serverless-parking-reminder

**Overview**
I  park my car on the street in San Francisco and hate getting tickets for street sweeping. This is a simple serverless app I created to send me a text reminder each time street sweeping is happening in my neighborhood. It's simple and nearly free to run, try it out yourself!


**Setup**
1. Install the [Serverless Framework](https://github.com/serverless/serverless) 
2. Configure your [AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/
) 
3. Get a [Twilio API key](https://www.twilio.com/sms)
4. Clone this repo and CD in to it
5. Run NPM install 
6. Replace the ‘accountSid’, ‘authToken’, ‘TWILIO NUMBER’, and  ’YOUR NUMBER’ in messenger.js with your Twilio credentials and numbers
7. Run 'sls deploy'

You should now have the serverless app deployed to AWS! To test it out run 'serverless invoke --function fourthWed'. If everything is working correctly you should receive a text message to the number you configured alerting you of street sweeping. If something went wrong it's most likely an issue with your AWS or Twilio credentials, confirm you have the correct credentials configured and check the respective consoles to help you debug.  

This example is setup for the street sweeping schedule in my neighborhood, but you can customize it for the area you park your car in by editing the functions in serverless.yml. Use the [Lambda Schedule Expressions](http://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html) to configure the scheduled messages.  

**Cost**

You can run this without paying anything using the free Lambda tier and the Twilio free trial, but even you were paying full price it wouldn’t break the bank. The example here would cost about $.0000002/month in Lambda fees and $.09/month in Twilio fees. 