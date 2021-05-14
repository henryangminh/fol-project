from nltk.sem import Expression
import nltk.inference.resolution as resolution
read_expr = Expression.fromstring

def convert_to_expression(knowledge_base):
    knowledge_base_list = []
    for kb in knowledge_base:
        knowledge_base_list.append(read_expr(kb))
    
    return knowledge_base_list

def prove_by_resolution(knowledge_base, proof):
    knowledge_base = convert_to_expression(knowledge_base)
    print(resolution.ResolutionProver().prove(read_expr(proof), knowledge_base, verbose=True))