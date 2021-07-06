import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  DepositMade,
  LoanRequestMade,
  CircleCreated,
  CircleMemberUpdate,
  RepaymentStatus
} from "../generated/Contract/Contract"
import { DepositMadeEntity, LoanRequestMadeEntity, CircleCreatedEntity} from "../generated/schema"

export function handleDepositMade(event: DepositMade): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  //let NewContributionMadeEntity = new ContributionMadeEntity(event.params.user.toHexString() + event.params.circle.toHexString() + event.block.timestamp.toString())

  // Entity fields can be set based on event parameters
  //NewContributionMadeEntity.contributor = event.params.user
  //NewContributionMadeEntity.circle = event.params.circle
  //NewContributionMadeEntity.timeStamp = event.block.timestamp
  //NewContributionMadeEntity.amount = event.params.amount

  //let contract = Contract.bind(event.address)

  // Entities can be written to the store with `.save()`
  //NewContributionMadeEntity.save()


  //ContributionsMade.load()

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  //***if (entity == null) {
    //***entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    //***entity.count = BigInt.fromI32(0)
  //***}

  // BigInt and BigDecimal math are supported
  //***entity.count = entity.count + BigInt.fromI32(1)



  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getBalances(...)
  // - contract.getCircleInfo(...)
  // - contract.getCircles(...)
  // - contract.getMembers(...)
  // - contract.getTotalBalance(...)
  // - contract.queryMissedPayments(...)
}

export function handleLoanRequestMade(event: LoanRequestMade): void {
}

export function handleCircleCreated(event: CircleCreated): void {
  let NewCircleCreatedEntity = new CircleCreatedEntity(event.params.creator.toHexString() + event.params.circle.toHexString() + event.block.timestamp.toString())

  NewCircleCreatedEntity.creator = event.params.creator
  NewCircleCreatedEntity.circle = event.params.circle
  NewCircleCreatedEntity.timeStamp = event.block.timestamp

  NewCircleCreatedEntity.save()

}

export function handleCircleMemberUpdate(event: CircleMemberUpdate): void {
}

export function handleRepaymentStatus(event: RepaymentStatus): void {
}

