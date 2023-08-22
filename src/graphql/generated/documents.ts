// @ts-nocheck
import type * as Types from './types';

import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type AccountError = { __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode };

export type LogInVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type LogIn = { __typename?: 'Mutation', tokenCreate?: { __typename?: 'CreateToken', token?: string | null, refreshToken?: string | null, csrfToken?: string | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type ChangePasswordVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type ChangePassword = { __typename?: 'Mutation', setPassword?: { __typename?: 'SetPassword', token?: string | null, refreshToken?: string | null, csrfToken?: string | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type ConfirmAccountVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
}>;


export type ConfirmAccount = { __typename?: 'Mutation', confirmAccount?: { __typename?: 'ConfirmAccount', user?: { __typename?: 'User', isActive: boolean } | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type RequestPasswordResetVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  redirectUrl: Types.Scalars['String']['input'];
  channel: Types.Scalars['String']['input'];
}>;


export type RequestPasswordReset = { __typename?: 'Mutation', requestPasswordReset?: { __typename?: 'RequestPasswordReset', errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type SignUpVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
  channel: Types.Scalars['String']['input'];
  redirectUrl: Types.Scalars['String']['input'];
}>;


export type SignUp = { __typename?: 'Mutation', accountRegister?: { __typename?: 'AccountRegister', requiresConfirmation?: boolean | null, user?: { __typename?: 'User', email: string } | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type GetUserEmailVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUserEmail = { __typename?: 'Query', me?: { __typename?: 'User', email: string } | null };

export type GetHeaderMenuVariables = Types.Exact<{
  languageCode: Types.LanguageCodeEnum;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetHeaderMenu = { __typename?: 'Query', menu?: { __typename?: 'Menu', items?: Array<{ __typename?: 'MenuItem', name: string, translation?: { __typename?: 'MenuItemTranslation', name: string } | null, category?: { __typename?: 'Category', slug: string } | null }> | null } | null };

export type GrossPrice = { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } };

export type PageInfo = { __typename?: 'PageInfo', startCursor?: string | null, hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean };

export type ProductListItem = { __typename?: 'Product', id: string, name: string, slug: string, isAvailable?: boolean | null, defaultVariant?: { __typename?: 'ProductVariant', id: string, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string }> | null, pricing?: { __typename?: 'VariantPricingInfo', onSale?: boolean | null, discount?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null, price?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null, priceUndiscounted?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null } | null } | null };

export type ProductMedia = { __typename?: 'ProductMedia', id: string, alt: string, url: string };

export type GetProductsVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  languageCode: Types.LanguageCodeEnum;
  channel?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.InputMaybe<Types.ProductFilterInput>;
}>;


export type GetProducts = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, slug: string, isAvailable?: boolean | null, translation?: { __typename?: 'ProductTranslation', name?: string | null } | null, defaultVariant?: { __typename?: 'ProductVariant', id: string, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string }> | null, pricing?: { __typename?: 'VariantPricingInfo', onSale?: boolean | null, discount?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null, price?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null, priceUndiscounted?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean } } | null };

export type Address = { __typename?: 'Address', firstName: string, lastName: string, streetAddress1: string, streetAddress2: string, city: string, countryArea: string, postalCode: string, country: { __typename?: 'CountryDisplay', code: string, country: string } };

export type GetAddressValidationRulesVariables = Types.Exact<{
  countryCode: Types.CountryCode;
}>;


export type GetAddressValidationRules = { __typename?: 'Query', addressValidationRules?: { __typename?: 'AddressValidationData', postalCodeMatchers: Array<string>, postalCodeExamples: Array<string>, addressFormat: string, countryAreaType: string, countryAreaChoices: Array<{ __typename?: 'ChoiceValue', raw?: string | null, verbose?: string | null }> } | null };

export type GetCheckoutVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetCheckout = { __typename?: 'Query', checkout?: { __typename?: 'Checkout', billingAddress?: { __typename?: 'Address', firstName: string, lastName: string, streetAddress1: string, streetAddress2: string, city: string, countryArea: string, postalCode: string, country: { __typename?: 'CountryDisplay', code: string, country: string } } | null, shippingAddress?: { __typename?: 'Address', firstName: string, lastName: string, streetAddress1: string, streetAddress2: string, city: string, countryArea: string, postalCode: string, country: { __typename?: 'CountryDisplay', code: string, country: string } } | null } | null };

export type GetCountryCodesVariables = Types.Exact<{
  channel: Types.Scalars['String']['input'];
}>;


export type GetCountryCodes = { __typename?: 'Query', channel?: { __typename?: 'Channel', countries?: Array<{ __typename?: 'CountryDisplay', code: string }> | null } | null };

export type UpdateCheckoutBillingAddressVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  billingAddress: Types.AddressInput;
}>;


export type UpdateCheckoutBillingAddress = { __typename?: 'Mutation', checkoutBillingAddressUpdate?: { __typename?: 'CheckoutBillingAddressUpdate', errors: Array<{ __typename?: 'CheckoutError', field?: string | null, code: Types.CheckoutErrorCode }> } | null };

export type UpdateCheckoutShippingAddressVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  shippingAddress: Types.AddressInput;
}>;


export type UpdateCheckoutShippingAddress = { __typename?: 'Mutation', checkoutShippingAddressUpdate?: { __typename?: 'CheckoutShippingAddressUpdate', errors: Array<{ __typename?: 'CheckoutError', field?: string | null, code: Types.CheckoutErrorCode }> } | null };

export type RefreshAccessTokenVariables = Types.Exact<{
  refreshToken: Types.Scalars['String']['input'];
}>;


export type RefreshAccessToken = { __typename?: 'Mutation', tokenRefresh?: { __typename?: 'RefreshToken', token?: string | null, errors: Array<{ __typename?: 'AccountError', field?: string | null, code: Types.AccountErrorCode }> } | null };

export type CheckoutError = { __typename?: 'CheckoutError', field?: string | null, code: Types.CheckoutErrorCode };

export type AddCheckoutLineVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  line: Types.CheckoutLineInput;
}>;


export type AddCheckoutLine = { __typename?: 'Mutation', checkoutLinesAdd?: { __typename?: 'CheckoutLinesAdd', errors: Array<{ __typename?: 'CheckoutError', field?: string | null, code: Types.CheckoutErrorCode }> } | null };

export type CreateCheckoutVariables = Types.Exact<{
  lines: Array<Types.CheckoutLineInput> | Types.CheckoutLineInput;
  channel: Types.Scalars['String']['input'];
  languageCode: Types.LanguageCodeEnum;
  email?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CreateCheckout = { __typename?: 'Mutation', checkoutCreate?: { __typename?: 'CheckoutCreate', checkout?: { __typename?: 'Checkout', id: string } | null, errors: Array<{ __typename?: 'CheckoutError', field?: string | null, code: Types.CheckoutErrorCode }> } | null };

export type GetCheckoutSummaryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  languageCode: Types.LanguageCodeEnum;
}>;


export type GetCheckoutSummary = { __typename?: 'Query', checkout?: { __typename?: 'Checkout', displayGrossPrices: boolean, lines: Array<{ __typename?: 'CheckoutLine', quantity: number, id: string, totalPrice: { __typename?: 'TaxedMoney', net: { __typename?: 'Money', amount: number }, gross: { __typename?: 'Money', amount: number } }, variant: { __typename?: 'ProductVariant', product: { __typename?: 'Product', name: string, translation?: { __typename?: 'ProductTranslation', name?: string | null } | null, media?: Array<{ __typename?: 'ProductMedia', url: string, alt: string }> | null } } }>, subtotalPrice: { __typename?: 'TaxedMoney', net: { __typename?: 'Money', amount: number }, gross: { __typename?: 'Money', amount: number } }, shippingPrice: { __typename?: 'TaxedMoney', net: { __typename?: 'Money', amount: number }, gross: { __typename?: 'Money', amount: number } }, totalPrice: { __typename?: 'TaxedMoney', currency: string, net: { __typename?: 'Money', amount: number }, gross: { __typename?: 'Money', amount: number } } } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const AccountError = new TypedDocumentString(`
    fragment accountError on AccountError {
  field
  code
}
    `, {"fragmentName":"accountError"}) as unknown as TypedDocumentString<AccountError, unknown>;
export const PageInfo = new TypedDocumentString(`
    fragment pageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}
    `, {"fragmentName":"pageInfo"}) as unknown as TypedDocumentString<PageInfo, unknown>;
export const ProductMedia = new TypedDocumentString(`
    fragment productMedia on ProductMedia {
  id
  alt
  url
}
    `, {"fragmentName":"productMedia"}) as unknown as TypedDocumentString<ProductMedia, unknown>;
export const GrossPrice = new TypedDocumentString(`
    fragment grossPrice on TaxedMoney {
  gross {
    currency
    amount
  }
}
    `, {"fragmentName":"grossPrice"}) as unknown as TypedDocumentString<GrossPrice, unknown>;
export const ProductListItem = new TypedDocumentString(`
    fragment productListItem on Product {
  id
  name
  slug
  defaultVariant {
    id
    media {
      ...productMedia
    }
    pricing {
      onSale
      discount {
        ...grossPrice
      }
      price {
        ...grossPrice
      }
      priceUndiscounted {
        ...grossPrice
      }
    }
  }
  isAvailable
}
    fragment grossPrice on TaxedMoney {
  gross {
    currency
    amount
  }
}
fragment productMedia on ProductMedia {
  id
  alt
  url
}`, {"fragmentName":"productListItem"}) as unknown as TypedDocumentString<ProductListItem, unknown>;
export const Address = new TypedDocumentString(`
    fragment address on Address {
  country {
    code
    country
  }
  firstName
  lastName
  streetAddress1
  streetAddress2
  city
  countryArea
  postalCode
}
    `, {"fragmentName":"address"}) as unknown as TypedDocumentString<Address, unknown>;
export const CheckoutError = new TypedDocumentString(`
    fragment checkoutError on CheckoutError {
  field
  code
}
    `, {"fragmentName":"checkoutError"}) as unknown as TypedDocumentString<CheckoutError, unknown>;
export const LogInDocument = new TypedDocumentString(`
    mutation logIn($email: String!, $password: String!) {
  tokenCreate(email: $email, password: $password) {
    token
    refreshToken
    csrfToken
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<LogIn, LogInVariables>;
export const ChangePasswordDocument = new TypedDocumentString(`
    mutation changePassword($email: String!, $token: String!, $password: String!) {
  setPassword(email: $email, token: $token, password: $password) {
    token
    refreshToken
    csrfToken
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<ChangePassword, ChangePasswordVariables>;
export const ConfirmAccountDocument = new TypedDocumentString(`
    mutation confirmAccount($email: String!, $token: String!) {
  confirmAccount(email: $email, token: $token) {
    user {
      isActive
    }
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<ConfirmAccount, ConfirmAccountVariables>;
export const RequestPasswordResetDocument = new TypedDocumentString(`
    mutation requestPasswordReset($email: String!, $redirectUrl: String!, $channel: String!) {
  requestPasswordReset(
    email: $email
    redirectUrl: $redirectUrl
    channel: $channel
  ) {
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<RequestPasswordReset, RequestPasswordResetVariables>;
export const SignUpDocument = new TypedDocumentString(`
    mutation signUp($email: String!, $password: String!, $channel: String!, $redirectUrl: String!) {
  accountRegister(
    input: {email: $email, password: $password, channel: $channel, redirectUrl: $redirectUrl}
  ) {
    user {
      email
    }
    errors {
      ...accountError
    }
    requiresConfirmation
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<SignUp, SignUpVariables>;
export const GetUserEmailDocument = new TypedDocumentString(`
    query getUserEmail {
  me {
    email
  }
}
    `) as unknown as TypedDocumentString<GetUserEmail, GetUserEmailVariables>;
export const GetHeaderMenuDocument = new TypedDocumentString(`
    query getHeaderMenu($languageCode: LanguageCodeEnum!, $channel: String) {
  menu(name: "navbar", channel: $channel) {
    items {
      name
      translation(languageCode: $languageCode) {
        name
      }
      category {
        slug
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetHeaderMenu, GetHeaderMenuVariables>;
export const GetProductsDocument = new TypedDocumentString(`
    query getProducts($first: Int, $after: String, $last: Int, $before: String, $languageCode: LanguageCodeEnum!, $channel: String, $filter: ProductFilterInput) {
  products(
    first: $first
    after: $after
    last: $last
    before: $before
    channel: $channel
    filter: $filter
  ) {
    edges {
      node {
        ...productListItem
        translation(languageCode: $languageCode) {
          name
        }
      }
    }
    pageInfo {
      ...pageInfo
    }
  }
}
    fragment grossPrice on TaxedMoney {
  gross {
    currency
    amount
  }
}
fragment pageInfo on PageInfo {
  startCursor
  hasNextPage
  endCursor
  hasPreviousPage
}
fragment productListItem on Product {
  id
  name
  slug
  defaultVariant {
    id
    media {
      ...productMedia
    }
    pricing {
      onSale
      discount {
        ...grossPrice
      }
      price {
        ...grossPrice
      }
      priceUndiscounted {
        ...grossPrice
      }
    }
  }
  isAvailable
}
fragment productMedia on ProductMedia {
  id
  alt
  url
}`) as unknown as TypedDocumentString<GetProducts, GetProductsVariables>;
export const GetAddressValidationRulesDocument = new TypedDocumentString(`
    query getAddressValidationRules($countryCode: CountryCode!) {
  addressValidationRules(countryCode: $countryCode) {
    postalCodeMatchers
    postalCodeExamples
    addressFormat
    countryAreaType
    countryAreaChoices {
      raw
      verbose
    }
  }
}
    `) as unknown as TypedDocumentString<GetAddressValidationRules, GetAddressValidationRulesVariables>;
export const GetCheckoutDocument = new TypedDocumentString(`
    query getCheckout($id: ID!) {
  checkout(id: $id) {
    billingAddress {
      ...address
    }
    shippingAddress {
      ...address
    }
  }
}
    fragment address on Address {
  country {
    code
    country
  }
  firstName
  lastName
  streetAddress1
  streetAddress2
  city
  countryArea
  postalCode
}`) as unknown as TypedDocumentString<GetCheckout, GetCheckoutVariables>;
export const GetCountryCodesDocument = new TypedDocumentString(`
    query getCountryCodes($channel: String!) {
  channel(slug: $channel) {
    countries {
      code
    }
  }
}
    `) as unknown as TypedDocumentString<GetCountryCodes, GetCountryCodesVariables>;
export const UpdateCheckoutBillingAddressDocument = new TypedDocumentString(`
    mutation updateCheckoutBillingAddress($id: ID!, $billingAddress: AddressInput!) {
  checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<UpdateCheckoutBillingAddress, UpdateCheckoutBillingAddressVariables>;
export const UpdateCheckoutShippingAddressDocument = new TypedDocumentString(`
    mutation updateCheckoutShippingAddress($id: ID!, $shippingAddress: AddressInput!) {
  checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<UpdateCheckoutShippingAddress, UpdateCheckoutShippingAddressVariables>;
export const RefreshAccessTokenDocument = new TypedDocumentString(`
    mutation refreshAccessToken($refreshToken: String!) {
  tokenRefresh(refreshToken: $refreshToken) {
    token
    errors {
      ...accountError
    }
  }
}
    fragment accountError on AccountError {
  field
  code
}`) as unknown as TypedDocumentString<RefreshAccessToken, RefreshAccessTokenVariables>;
export const AddCheckoutLineDocument = new TypedDocumentString(`
    mutation addCheckoutLine($id: ID, $line: CheckoutLineInput!) {
  checkoutLinesAdd(id: $id, lines: [$line]) {
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<AddCheckoutLine, AddCheckoutLineVariables>;
export const CreateCheckoutDocument = new TypedDocumentString(`
    mutation createCheckout($lines: [CheckoutLineInput!]!, $channel: String!, $languageCode: LanguageCodeEnum!, $email: String) {
  checkoutCreate(
    input: {channel: $channel, lines: $lines, languageCode: $languageCode, email: $email}
  ) {
    checkout {
      id
    }
    errors {
      ...checkoutError
    }
  }
}
    fragment checkoutError on CheckoutError {
  field
  code
}`) as unknown as TypedDocumentString<CreateCheckout, CreateCheckoutVariables>;
export const GetCheckoutSummaryDocument = new TypedDocumentString(`
    query getCheckoutSummary($id: ID!, $languageCode: LanguageCodeEnum!) {
  checkout(id: $id) {
    lines {
      totalPrice {
        net {
          amount
        }
        gross {
          amount
        }
      }
      variant {
        product {
          name
          translation(languageCode: $languageCode) {
            name
          }
          media {
            url
            alt
          }
        }
      }
      quantity
      id
    }
    displayGrossPrices
    subtotalPrice {
      net {
        amount
      }
      gross {
        amount
      }
    }
    shippingPrice {
      net {
        amount
      }
      gross {
        amount
      }
    }
    totalPrice {
      currency
      net {
        amount
      }
      gross {
        amount
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCheckoutSummary, GetCheckoutSummaryVariables>;