# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :messages
- has_many :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

■解決したいこと


■自力で調べた内容


■仮説と検証作業の結果


フリーランス
業務委託契約になる
・準委任契約→役割に対して報酬 ※契約書類をしっかりと確認する
・請負契約→成果に対して報酬。完成義務がある。

営業活動
1. 知り合いからの紹介
   実績が重要になる。１件目の契約を取るのが難しい。そのため一件目でならいいかも
2. オンラインの広報活動
   SNSやブログの運用をしてアウトプットから。Twitterは活用している人が多くコミュニティを構築しやすいい。
3. 業界イベント・コミュニティに参加
   懇親会で人脈を増やしたり、勉強のために。
4. クラウドソーシングサービスの活用
   ランサーズ、クラウドワークスなどの活用する。信用担保になる。気軽に案件を見つけられるが競争が激しい
5. エージェントの活用
   人材紹介サービスを使う。営業が苦手な人にオススメ
  
ライフコーチと対面や自己分析をしながら取り組む
ターム開発→フリーランスのサポートが8週間ある
サポート期間中は週次MTG（活動報告会）がある

営業活動
1. ファーストコンタクトにおける円滑な対話
2. ラポール(信頼関係)の形成
   傾聴の姿勢（観察、反応、反映、受容、共感/共通点、確認、促進/質問)
   →相手が求めている話題を提供が必要。ユーモアも必要

   会話を広げる
   水平思考→深堀せず広くたくさんのことを聞く
   垂直思考→なぜ？どうやって？など話を深堀する
   ５W１H
   opem question 自由な表現で答えられる
   closede question はい、いいえで簡単に答えられる
   
   ロジカル思考
   主張→根拠→事例→結論

   アイデアの力
   SUCCES
   単純明快である
   意外性がある
   具体性がある
   信頼性がある→過去の偉人や誰が言っている、証拠の提示
   感情に訴えている
   物語性がある
