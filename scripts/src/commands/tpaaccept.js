import commandBuilder from "../classes/commands.js";
import TPA from "../classes/tpa.js";

commandBuilder.add({
    commandName:"tpaaccept",
    description:"Used to accept an incoming tpa request.",
    config:true,
    usages:["tpaacept <player: playerName>"],
    aliases:["tpac"]
},(config,name,args)=>{
    if (!args[0]) return commandBuilder.invalidSyntax("tpaaccept",name,[" "]);
    if (config.tpaAcceptUI) return TPA.open_accept_ui(name,args[0]);
    
    const target = args.length === 1 ? args[0]:args.join(" ");

    TPA.accept(name,target);
});