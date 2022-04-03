import { InputType, Field } from "type-graphql";


@InputType("NestedStringFilter", {
  isAbstract: true
})
export class NestedStringFilter {
  @Field(_type => String, {
    nullable: true
  })
  equals?: string | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  in?: string[] | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  notIn?: string[] | undefined;

  @Field(_type => String, {
    nullable: true
  })
  lt?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  lte?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  gt?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  gte?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  contains?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  startsWith?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  endsWith?: string | undefined;

  @Field(_type => NestedStringFilter, {
    nullable: true
  })
  not?: NestedStringFilter | undefined;
}
