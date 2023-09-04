/* eslint-disable */
import * as types from './graphql';
import type {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query HeaderMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "header", channel: $channel) {\n      items {\n        id\n        ...HeaderMenuItem_MenuItemFragment\n      }\n    }\n  }\n':
    types.HeaderMenu_MenuQueryDocument,
  '\n  fragment HeaderMenuItem_MenuItemFragment on MenuItem {\n    page {\n      id\n    }\n    ...HeaderMenuLink_MenuItemFragment\n    ...CategoryDropdown_MenuItemFragment\n  }\n':
    types.HeaderMenuItem_MenuItemFragmentFragmentDoc,
  '\n  fragment HeaderMenuLink_MenuItemFragment on MenuItem {\n    name\n    page {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n':
    types.HeaderMenuLink_MenuItemFragmentFragmentDoc,
  '\n  fragment CategoryDropdown_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    children {\n      id\n      ...CategoryDropdownItem_MenuItemFragment\n    }\n  }\n':
    types.CategoryDropdown_MenuItemFragmentFragmentDoc,
  '\n  fragment CategoryDropdownItem_MenuItemFragment on MenuItem {\n    ...DropdownItem_MenuItemFragment\n    ...DropdownItemWithChildren_MenuItemFragment\n    children {\n      id\n      ...DropdownItem_MenuItemFragment\n      ...DropdownItemWithChildren_MenuItemFragment\n      children {\n        id\n        ...DropdownItem_MenuItemFragment\n        ...DropdownItemWithChildren_MenuItemFragment\n      }\n    }\n  }\n':
    types.CategoryDropdownItem_MenuItemFragmentFragmentDoc,
  '\n  fragment DropdownItem_MenuItemFragment on MenuItem {\n    name\n    category {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n':
    types.DropdownItem_MenuItemFragmentFragmentDoc,
  '\n  fragment DropdownItemWithChildren_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    ...DropdownItem_MenuItemFragment\n  }\n':
    types.DropdownItemWithChildren_MenuItemFragmentFragmentDoc,
  '\n  query GetNavCategoriesQuery($languageCode: LanguageCodeEnum!) {\n    categories(level: 0, first: 12) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n          level\n          children(first: 12) {\n            edges {\n              node {\n                id\n                name\n                translation(languageCode: $languageCode) {\n                  name\n                }\n                slug\n                level\n                children(first: 12) {\n                  edges {\n                    node {\n                      id\n                      name\n                      translation(languageCode: $languageCode) {\n                        name\n                      }\n                      slug\n                      level\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetNavCategoriesQueryDocument,
  '\n  query GetNavCollectionsQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: 6, channel: $channel) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n        }\n      }\n    }\n  }\n':
    types.GetNavCollectionsQueryDocument,
  '\n  query Pagination_ProductsQuery(\n    $first: Int\n    $after: String\n    $search: String\n    $filter: ProductFilterInput\n    $address: AddressInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      search: $search\n      filter: $filter\n      channel: $channel\n    ) {\n      pageInfo {\n        ...PaginationLinks_PageInfoFragment\n      }\n      ...ProductList_ProductCountableConnectionFragment\n    }\n  }\n':
    types.Pagination_ProductsQueryDocument,
  '\n  fragment PaginationLinks_PageInfoFragment on PageInfo {\n    hasNextPage\n    endCursor\n  }\n':
    types.PaginationLinks_PageInfoFragmentFragmentDoc,
  '\n  fragment PriceBadge_VariantPricingInfoFragment on VariantPricingInfo {\n    onSale\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n':
    types.PriceBadge_VariantPricingInfoFragmentFragmentDoc,
  '\n  fragment ProductCard_ProductFragment on Product {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    defaultVariant {\n      pricing(address: $address) {\n        ...PriceBadge_VariantPricingInfoFragment\n      }\n    }\n    isAvailable\n    thumbnail(size: 4096) {\n      url\n      alt\n    }\n  }\n':
    types.ProductCard_ProductFragmentFragmentDoc,
  '\n  fragment ProductList_ProductCountableConnectionFragment on ProductCountableConnection {\n    edges {\n      node {\n        id\n        slug\n        ...ProductCard_ProductFragment\n      }\n    }\n  }\n':
    types.ProductList_ProductCountableConnectionFragmentFragmentDoc,
  '\n  query GetCategoryIdsQuery(\n    $first: Int\n    $after: String\n    $filter: CategoryFilterInput\n  ) {\n    categories(first: $first, after: $after, filter: $filter) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n':
    types.GetCategoryIdsQueryDocument,
  '\n  query getCollectionIds(\n    $first: Int\n    $after: String\n    $filter: CollectionFilterInput\n    $channel: String\n  ) {\n    collections(\n      first: $first\n      after: $after\n      filter: $filter\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n':
    types.GetCollectionIdsDocument,
  '\n  query ProductAttributes_AttributesQuery(\n    $where: AttributeWhereInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    attributes(first: 16, where: $where, channel: $channel) {\n      edges {\n        node {\n          id\n          ...ProductAttributesDropdown_AttributeFragment\n        }\n      }\n    }\n  }\n':
    types.ProductAttributes_AttributesQueryDocument,
  '\n  fragment AttributeCheckbox_AttributeFragment on AttributeValue {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n':
    types.AttributeCheckbox_AttributeFragmentFragmentDoc,
  '\n  fragment ProductAttributesDropdown_AttributeFragment on Attribute {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n    choices(first: 20) {\n      edges {\n        node {\n          id\n          ...AttributeCheckbox_AttributeFragment\n        }\n      }\n    }\n  }\n':
    types.ProductAttributesDropdown_AttributeFragmentFragmentDoc,
  '\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n':
    types.RefreshAccessTokenMutationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query HeaderMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "header", channel: $channel) {\n      items {\n        id\n        ...HeaderMenuItem_MenuItemFragment\n      }\n    }\n  }\n',
): (typeof documents)['\n  query HeaderMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "header", channel: $channel) {\n      items {\n        id\n        ...HeaderMenuItem_MenuItemFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment HeaderMenuItem_MenuItemFragment on MenuItem {\n    page {\n      id\n    }\n    ...HeaderMenuLink_MenuItemFragment\n    ...CategoryDropdown_MenuItemFragment\n  }\n',
): (typeof documents)['\n  fragment HeaderMenuItem_MenuItemFragment on MenuItem {\n    page {\n      id\n    }\n    ...HeaderMenuLink_MenuItemFragment\n    ...CategoryDropdown_MenuItemFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment HeaderMenuLink_MenuItemFragment on MenuItem {\n    name\n    page {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment HeaderMenuLink_MenuItemFragment on MenuItem {\n    name\n    page {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CategoryDropdown_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    children {\n      id\n      ...CategoryDropdownItem_MenuItemFragment\n    }\n  }\n',
): (typeof documents)['\n  fragment CategoryDropdown_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    children {\n      id\n      ...CategoryDropdownItem_MenuItemFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CategoryDropdownItem_MenuItemFragment on MenuItem {\n    ...DropdownItem_MenuItemFragment\n    ...DropdownItemWithChildren_MenuItemFragment\n    children {\n      id\n      ...DropdownItem_MenuItemFragment\n      ...DropdownItemWithChildren_MenuItemFragment\n      children {\n        id\n        ...DropdownItem_MenuItemFragment\n        ...DropdownItemWithChildren_MenuItemFragment\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment CategoryDropdownItem_MenuItemFragment on MenuItem {\n    ...DropdownItem_MenuItemFragment\n    ...DropdownItemWithChildren_MenuItemFragment\n    children {\n      id\n      ...DropdownItem_MenuItemFragment\n      ...DropdownItemWithChildren_MenuItemFragment\n      children {\n        id\n        ...DropdownItem_MenuItemFragment\n        ...DropdownItemWithChildren_MenuItemFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment DropdownItem_MenuItemFragment on MenuItem {\n    name\n    category {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment DropdownItem_MenuItemFragment on MenuItem {\n    name\n    category {\n      slug\n    }\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment DropdownItemWithChildren_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    ...DropdownItem_MenuItemFragment\n  }\n',
): (typeof documents)['\n  fragment DropdownItemWithChildren_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    ...DropdownItem_MenuItemFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetNavCategoriesQuery($languageCode: LanguageCodeEnum!) {\n    categories(level: 0, first: 12) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n          level\n          children(first: 12) {\n            edges {\n              node {\n                id\n                name\n                translation(languageCode: $languageCode) {\n                  name\n                }\n                slug\n                level\n                children(first: 12) {\n                  edges {\n                    node {\n                      id\n                      name\n                      translation(languageCode: $languageCode) {\n                        name\n                      }\n                      slug\n                      level\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetNavCategoriesQuery($languageCode: LanguageCodeEnum!) {\n    categories(level: 0, first: 12) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n          level\n          children(first: 12) {\n            edges {\n              node {\n                id\n                name\n                translation(languageCode: $languageCode) {\n                  name\n                }\n                slug\n                level\n                children(first: 12) {\n                  edges {\n                    node {\n                      id\n                      name\n                      translation(languageCode: $languageCode) {\n                        name\n                      }\n                      slug\n                      level\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetNavCollectionsQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: 6, channel: $channel) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetNavCollectionsQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: 6, channel: $channel) {\n      edges {\n        node {\n          id\n          name\n          translation(languageCode: $languageCode) {\n            name\n          }\n          slug\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Pagination_ProductsQuery(\n    $first: Int\n    $after: String\n    $search: String\n    $filter: ProductFilterInput\n    $address: AddressInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      search: $search\n      filter: $filter\n      channel: $channel\n    ) {\n      pageInfo {\n        ...PaginationLinks_PageInfoFragment\n      }\n      ...ProductList_ProductCountableConnectionFragment\n    }\n  }\n',
): (typeof documents)['\n  query Pagination_ProductsQuery(\n    $first: Int\n    $after: String\n    $search: String\n    $filter: ProductFilterInput\n    $address: AddressInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      search: $search\n      filter: $filter\n      channel: $channel\n    ) {\n      pageInfo {\n        ...PaginationLinks_PageInfoFragment\n      }\n      ...ProductList_ProductCountableConnectionFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PaginationLinks_PageInfoFragment on PageInfo {\n    hasNextPage\n    endCursor\n  }\n',
): (typeof documents)['\n  fragment PaginationLinks_PageInfoFragment on PageInfo {\n    hasNextPage\n    endCursor\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PriceBadge_VariantPricingInfoFragment on VariantPricingInfo {\n    onSale\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment PriceBadge_VariantPricingInfoFragment on VariantPricingInfo {\n    onSale\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n    priceUndiscounted {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductCard_ProductFragment on Product {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    defaultVariant {\n      pricing(address: $address) {\n        ...PriceBadge_VariantPricingInfoFragment\n      }\n    }\n    isAvailable\n    thumbnail(size: 4096) {\n      url\n      alt\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductCard_ProductFragment on Product {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    defaultVariant {\n      pricing(address: $address) {\n        ...PriceBadge_VariantPricingInfoFragment\n      }\n    }\n    isAvailable\n    thumbnail(size: 4096) {\n      url\n      alt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductList_ProductCountableConnectionFragment on ProductCountableConnection {\n    edges {\n      node {\n        id\n        slug\n        ...ProductCard_ProductFragment\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductList_ProductCountableConnectionFragment on ProductCountableConnection {\n    edges {\n      node {\n        id\n        slug\n        ...ProductCard_ProductFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCategoryIdsQuery(\n    $first: Int\n    $after: String\n    $filter: CategoryFilterInput\n  ) {\n    categories(first: $first, after: $after, filter: $filter) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCategoryIdsQuery(\n    $first: Int\n    $after: String\n    $filter: CategoryFilterInput\n  ) {\n    categories(first: $first, after: $after, filter: $filter) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getCollectionIds(\n    $first: Int\n    $after: String\n    $filter: CollectionFilterInput\n    $channel: String\n  ) {\n    collections(\n      first: $first\n      after: $after\n      filter: $filter\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getCollectionIds(\n    $first: Int\n    $after: String\n    $filter: CollectionFilterInput\n    $channel: String\n  ) {\n    collections(\n      first: $first\n      after: $after\n      filter: $filter\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query ProductAttributes_AttributesQuery(\n    $where: AttributeWhereInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    attributes(first: 16, where: $where, channel: $channel) {\n      edges {\n        node {\n          id\n          ...ProductAttributesDropdown_AttributeFragment\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ProductAttributes_AttributesQuery(\n    $where: AttributeWhereInput\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    attributes(first: 16, where: $where, channel: $channel) {\n      edges {\n        node {\n          id\n          ...ProductAttributesDropdown_AttributeFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AttributeCheckbox_AttributeFragment on AttributeValue {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n',
): (typeof documents)['\n  fragment AttributeCheckbox_AttributeFragment on AttributeValue {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductAttributesDropdown_AttributeFragment on Attribute {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n    choices(first: 20) {\n      edges {\n        node {\n          id\n          ...AttributeCheckbox_AttributeFragment\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductAttributesDropdown_AttributeFragment on Attribute {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n    choices(first: 20) {\n      edges {\n        node {\n          id\n          ...AttributeCheckbox_AttributeFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
