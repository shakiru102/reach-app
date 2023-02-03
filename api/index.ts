import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://reeachapplication-env.eba-tgu33af7.us-east-1.elasticbeanstalk.com/api',
})