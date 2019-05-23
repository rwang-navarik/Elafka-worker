## Proposal: A random event Kafka producer
### Purpose
To have a Kafka topic that is constantly producing JSON messages representing artificial system events. This topic can be subscribed to by other services (such as workers) when testing their ability to operate as a Kafka consumer and respond to ongoing data updates.

### Target Kafka Topic
```uswest1-ticithub-dev-random-event-log```

### Kafka Message JSON Format
The values should be stored in JSON with backslash escapes for double-quotes. The initial purpose of this generator is to produce data that is formatted similar to the `uswest1-ticithub-dev-job-eventlog` topic. The fields currently wanted are:
* Five randomly generated UUIDs with arbitrary names: uuid0, uuid1, uuid2, uuid3, uuid4
* Five UTC date-time stamps, two past, one now, two future with names: past0, past1, now, future0, future1
* Five random full names: fullname0, fullname1, fullname2, fullname3, fullname4
  * EXAMPLE: "Jane Doe", "Roger Smith"
* Five random usernames: username0, username1, username2, username3, username4
  * EXAMPLES: "jdoe", "rsmith2"
* Five random strings of ten alphanumeric characters: alpha0, alpha1, alpha2, alpha3, alpha4
  * EXAMPLES: "sd9EW98sdf", "v89weSh4Il"
* Five random positive integers of any size: int0, int1, int2, int3, int4
* Five random floats between zero and one (inclusive): float0, float1, float2, float3, float4
  * EXAMPLES: "0.98349872", "0.0020374", "1.000000", "0.4982729"
* One Lorem Ipsum message of 200 chars in length, named: lorem
  * EXAMPLE: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "