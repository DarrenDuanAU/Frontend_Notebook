# MongoDB

## Basics

### up-level understanding

在关系行数据库（类似于PostgreSQL），database中是table，table中column。类似于关系型数据库，在mongoDB中，database中有collection，collection中有document。



### commands

start the mongodb services
```zsh
brew services start mongodb-community
```

stop the mongodb services
```zsh
brew services stop mongodb-community
```

after starting the mongodb services, we can run mongo shell commands
```zsh
mongosh
```
#### Mongo shell cheating sheet

进入mongo shell后，我们默认进入test database。
清除屏幕
```zsh
test> cls
```

跳出mongoDB
```zsh
test> exit
```

显示所有database。
```zsh
test> show dbs
```

进入这个database，如果没有这个database不存在，我们会创建一个新的database，并进入。
```zsh
test> use <db-name>
```
例如，创建并进入一个appdb的database。
```zsh
test> use appdb
```

在一个database中，显示所有collections。
```zsh
appdb> show collections
```

在一个database中，删除所在的database (在mongoDB中有很多这种类似于JavaScript的格式的语句)
```zsh
appdb> db.dropDatabase()
```

就像是在Js中一样，在mongoDB中，你不必创建一个collection，如果一个collection不存在，你直接在一个collection中创建一个document，这个collection就被创建了。


在database（appdb）中创建一个collection（users），并添加一个document（{ name: "John"})
```zsh
appdb> db.users.insertOne({ name: "John" })
```

显示特定collection内的内容
```zsh
appdb> db.users.find()
```

创建另一个document
```zsh
appdb> db.users.insertOne({ name: "Sally", age: 19, address: { street: ""987 North St}, hobbies: ["Running"] })
```

一次性添加多个document
```zsh
appdb> db.users.insertMany([{ name: "Jill" },{ name: "Mike" }])
```

获取数据（find())，排序(sort({ age: 1, name: -1 }) 就是先按age顺序排序，然后按name倒叙排序)，跳过第一个(skip(1))，限制展示(limit(2))。
```zsh
appdb> db.users.find().sort({ age: 1, name: -1 }).skip(1).limit(2)
```




