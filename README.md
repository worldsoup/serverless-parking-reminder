# serverless-parking-reminder

**Setup**

In order to get this up and working, you’ll need to have the [Serverless Framework](https://github.com/serverless/serverless) installed (along with AWS credentials setup) as well as a [Twilio API](https://www.twilio.com/sms) key. 

To deploy this to Lambda just replace the ‘accountSid’, ‘authToken’, ‘TWILIO NUMBER’, and  ’YOUR NUMBER’ in messenger.js and then run ‘sls deploy’. 

In order to setup the proper cron for your street sweeping schedule edit the functions in serverless.yml. The example sends a message every second and fourth Wednesday and Friday using the [Lambda Schedule Expressions](http://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html).

**Cost**

You can run this without paying anything using the free Lambda tier and the Twilio free trial, but even you were paying full price it wouldn’t break the bank. The example here would cost about $.0000002/month in Lambda fees and $.09/month in Twilio fees. 