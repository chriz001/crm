import gql from 'graphql-tag'

import { userInfoFragment } from '../fragments/userInfo'

export const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password, name: "") {
      accessToken
      user {
        ...UserInfo
      }
    }
  }
  ${userInfoFragment}
`
